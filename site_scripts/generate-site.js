const fs = require('fs');
const path = require('path');
const wrench = require('wrench');
const parseDocMdUtil = require('./utils/parse-doc-md');
const parseDemoMdUtil = require('./utils/parse-demo-md');
const nameWithoutSuffixUtil = require('./utils/name-without-suffix');
const generateCodeBox = require('./utils/generate-code-box');
const generateDemo = require('./utils/generate-demo');
const generateDocs = require('./utils/generate-docs');
const generateRoutes = require('./utils/generate-routes');
const getMeta = require('./utils/get-meta');
const target = process.argv[2];
const isSyncSpecific = target && (target !== 'init');
// 创建site文件夹
const showCasePath = path.resolve(__dirname, '../site');

if (!target) {
  wrench.rmdirSyncRecursive(`${showCasePath}/src`, true);
  wrench.copyDirSyncRecursive(path.resolve(__dirname, '_site/src'), `${showCasePath}/src`);
} else if (target === 'init') {
  wrench.rmdirSyncRecursive(`${showCasePath}`, true);
  wrench.copyDirSyncRecursive(path.resolve(__dirname, '_site'), `${showCasePath}`);
} else {
  wrench.rmdirSyncRecursive(`${showCasePath}/src/app/${target}`, true);
}
const showCaseTargetPath = `${showCasePath}/src/app/`;



// 读取components-ext文件夹
const rootPath_ext = path.resolve(__dirname, '../components-ext/lib');
const rootDir_ext = fs.readdirSync(rootPath_ext);
const componentsMap = {};
rootDir_ext.forEach(componentName => {
  if (isSyncSpecific) {
    if (componentName !== target) {
      return;
    }
  }
  if(componentName === 'share') {
    return;
  }
  const componentDirPath = path.join(rootPath_ext, componentName);
  if (componentName === 'style' || componentName === 'core' || componentName === 'locale' || componentName === 'i18n' || componentName === 'services') {
    return;
  }
  // 整体复制ext-share文件
  if (componentName === 'ext-share') {
    fs.mkdirSync(path.join(showCaseTargetPath, componentName));
    travel(componentName);
    return;
  }
  if (fs.statSync(componentDirPath).isDirectory()) {
    // 创建site->${component}文件夹
    const showCaseComponentPath = path.join(showCaseTargetPath, componentName);
    fs.mkdirSync(showCaseComponentPath);

    // 处理components->${component}->demo文件夹
    const demoDirPath = path.join(componentDirPath, 'demo');
    const demoMap = {};
    if (fs.existsSync(demoDirPath)) {
      const demoDir = fs.readdirSync(demoDirPath);
      demoDir.forEach(demo => {

        if (/.md$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          const demoMarkDownFile = fs.readFileSync(path.join(demoDirPath, demo));
          demoMap[nameKey] = parseDemoMdUtil(demoMarkDownFile);
          demoMap[nameKey]['enCode'] = generateCodeBox(componentName, nameKey, demoMap[nameKey].meta.title["en-US"], demoMap[nameKey].en, demoMap[nameKey].meta.iframe);
          demoMap[nameKey]['zhCode'] = generateCodeBox(componentName, nameKey, demoMap[nameKey].meta.title["zh-CN"], demoMap[nameKey].zh, demoMap[nameKey].meta.iframe);
        }
        if (/.component.ts$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          fs.writeFileSync(path.join(showCaseComponentPath, demo), String(fs.readFileSync(path.join(demoDirPath, demo))));
          return;
        }
        if (/.ts$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          demoMap[nameKey].ts = String(fs.readFileSync(path.join(demoDirPath, demo)));
          // 复制ts文件到site->${component}文件夹
          fs.writeFileSync(path.join(showCaseComponentPath, demo), demoMap[nameKey].ts);
        }
        if (/.css$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          fs.writeFileSync(path.join(showCaseComponentPath, demo), String(fs.readFileSync(path.join(demoDirPath, demo))));
        }
      });
    }
    // 处理components-ext->${component}->doc文件夹
    const result = {
      name: componentName,
      docZh: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.zh-CN.md')), `components/${componentName}/doc/index.zh-CN.md`),
      docEn: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.en-US.md')), `components/${componentName}/doc/index.en-US.md`),
      demoMap: demoMap
    };
    componentsMap[componentName] = result.docZh.meta;
    // 处理components-ext->${component}->share文件夹
    const shareDirPath = path.join(componentDirPath, 'share');
    if (fs.existsSync(shareDirPath)) {
      fs.mkdirSync(path.join(showCaseTargetPath, `${componentName}/share`));
      travel(`${componentName}/share`);
    }
    generateDemo(showCaseComponentPath, result);
  }
});

// 读取components文件夹
const rootPath = path.resolve(__dirname, '../components');
const rootDir = fs.readdirSync(rootPath);
rootDir.forEach(componentName => {
  if (isSyncSpecific) {
    if (componentName !== target) {
      return;
    }
  }
  const componentDirPath = path.join(rootPath, componentName);
  if (componentName === 'style' || componentName === 'core' || componentName === 'locale' || componentName === 'i18n') {
    return;
  }
  if (fs.statSync(componentDirPath).isDirectory()) {
    // 创建site->${component}文件夹
    const showCaseComponentPath = path.join(showCaseTargetPath, componentName);
    fs.mkdirSync(showCaseComponentPath);

    // 处理components->${component}->demo文件夹
    const demoDirPath = path.join(componentDirPath, 'demo');
    const demoMap = {};
    if (fs.existsSync(demoDirPath)) {
      const demoDir = fs.readdirSync(demoDirPath);
      demoDir.forEach(demo => {

        if (/.md$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          const demoMarkDownFile = fs.readFileSync(path.join(demoDirPath, demo));
          demoMap[nameKey] = parseDemoMdUtil(demoMarkDownFile);
          demoMap[nameKey]['enCode'] = generateCodeBox(componentName, nameKey, demoMap[nameKey].meta.title["en-US"], demoMap[nameKey].en, demoMap[nameKey].meta.iframe);
          demoMap[nameKey]['zhCode'] = generateCodeBox(componentName, nameKey, demoMap[nameKey].meta.title["zh-CN"], demoMap[nameKey].zh, demoMap[nameKey].meta.iframe);
        }
        if (/.ts$/.test(demo)) {
          const nameKey = nameWithoutSuffixUtil(demo);
          demoMap[nameKey].ts = String(fs.readFileSync(path.join(demoDirPath, demo)));
          // 复制ts文件到site->${component}文件夹
          fs.writeFileSync(path.join(showCaseComponentPath, demo), demoMap[nameKey].ts);
        }
      });
    }
    // 处理components->${component}->doc文件夹
    const result = {
      name: componentName,
      docZh: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.zh-CN.md')), `components/${componentName}/doc/index.zh-CN.md`),
      docEn: parseDocMdUtil(fs.readFileSync(path.join(componentDirPath, 'doc/index.en-US.md')), `components/${componentName}/doc/index.en-US.md`),
      demoMap: demoMap
    };
    componentsMap[componentName] = result.docZh.meta;

    generateDemo(showCaseComponentPath, result);
  }
});

if (!isSyncSpecific) {
  // 读取docs文件夹
  const docsPath = path.resolve(__dirname, '../docs_base');
  const docsDir = fs.readdirSync(docsPath);
  let docsMap = {};
  let docsMeta = {};
  docsDir.forEach(doc => {
    const name = nameWithoutSuffixUtil(doc);
    docsMap[name] = {
      zh: fs.readFileSync(path.join(docsPath, `${name}.zh-CN.md`)),
      en: fs.readFileSync(path.join(docsPath, `${name}.en-US.md`))
    };
    docsMeta[name] = {
      zh: getMeta(docsMap[name].zh),
      en: getMeta(docsMap[name].en)
    }
  });
  generateDocs(showCaseTargetPath, docsMap);
  generateRoutes(showCaseTargetPath, componentsMap, docsMeta);
}

// component-ext的share文件复制粘贴
function travel(dirName) {
  const directivePath = path.resolve(rootPath_ext, dirName);
  fs.readdirSync(directivePath).forEach(function (file) {
    const sourcePath = path.resolve(directivePath, file);
    const targetPath = path.resolve(showCaseTargetPath, `${dirName}/${file}`);
    if (fs.statSync(sourcePath).isFile()) {
      const fileBinary = fs.readFileSync(sourcePath);
      fs.writeFileSync(targetPath, fileBinary);
    } else {
      fs.mkdirSync(targetPath);
      const tempName = `${dirName}/${file}`;
      travel(tempName);
    }
  });
}