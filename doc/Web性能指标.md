# Web 性能指标
我们已经知道性能的重要性，但当我们讨论性能的时候，让一个网页变得很快，具体指哪些？
事实上性能是相对的：
  - 对于一个用户而言，一个站点可能速度很快（在具有功能强大的设备的快速网络上），而对于另一用户而言，一个站点可能会较慢（在具有低端设备的慢速网络上）。
  - 两个站点可能会在完全相同的时间内完成加载，但一个站点似乎加载速度回更快（如果他逐步加载内容，而不是等到最后显示任何内容）。
  - 一个网站可能会出现快速加载但后来（在全部或没有）慢慢地相应用户的交互。
所以在讨论性能的时候，精确的、可量化的指标很重要。
但是，仅仅是因为一个度量标准是基于客观标准并且可以定量的度量的，并不一定意味着这些度量是有用的。对于 Web 开发人员来说，如何衡量一个 Web 页面的性能一直是一个难题。
最初，我们使用Time to First Byte, DomContentLoaded 和 Load 这些衡量文档加载进度的指标，但他们不能直接反应用户视觉体验。
为了能衡量用户视觉体验，Web标准中定义了一些性能指标，这些性能指标被各大浏览器标准化实现，例如 First Paint 和 First Contentful Paint。还有一些由 Web 孵化器社区组（WICG）提出的性能指标，如 Largest Contentful Paint、Time to Interactive、First Input Delay、First CPU Idle. 另外还有 Google提出的 First Meaningful Paint、Speed Index, 百度提出的 First Screen Paint。

这些指标之间并不是毫无联系，而是在以用户为中心的目标中不断演进出来的，有的已经不在建议使用，有的被各种测试工具实现、有的则可以作为通用标准有各大浏览器提供的可用于在生产环境测量的AP。

![文件](./assets/file.svg) [RAIL性能模型](./RAIL%E6%80%A7%E8%83%BD%E6%A8%A1%E5%9E%8B.md)

![文件](./assets/file.svg) [基于用户体验的性能指标](./%E5%9F%BA%E4%BA%8E%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8C%E7%9A%84%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87.md)

![文件](./assets/file.svg) [Web Vitals](./WebVitals.md)

![文件](./assets/file.svg) [其他性能指标](./%E5%85%B6%E4%BB%96%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87.md)
