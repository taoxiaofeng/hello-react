/**
 * 修改项目的默认配置
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              // "@primary-color": "#1890ff",
              "@link-color": "#1DA57A",
              "@success-color": "#52c41a",
              "@warning-color": "#faad14",
              "@error-color": "#f5222d",
              "@font-size-base": "14px",
              "@heading-color": "rgba(0, 0, 0, 0.85)",
              "@text-color": "rgba(0, 0, 0, 0.65)",
              "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
              "@disabled-color": "rgba(0, 0, 0, 0.25)",
              "@border-radius-base": "2px",
              "@border-color-base": "#d9d9d9",
              "@box-shadow-base": "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};