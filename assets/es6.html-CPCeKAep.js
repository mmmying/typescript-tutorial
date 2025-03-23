import{_ as n,c as a,a as e,o as t}from"./app-DZKujXMK.js";const p={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="typescript-的-es6-类型" tabindex="-1"><a class="header-anchor" href="#typescript-的-es6-类型"><span>TypeScript 的 ES6 类型</span></a></h1><h2 id="map-k-v" tabindex="-1"><a class="header-anchor" href="#map-k-v"><span><code>Map&lt;K, V&gt;</code></span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">let</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Key any, value any</span></span>
<span class="line"><span class="token keyword">let</span> map3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Key string, value number</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 使用 Map 类型，描述 Map 结构。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">const</span> myMap<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;yes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Map 是一个泛型，使用时，比如给出类型变量。</p><p>由于存在类型推断，也可以省略类型参数。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">const</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;no&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;yes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-t" tabindex="-1"><a class="header-anchor" href="#set-t"><span><code>Set&lt;T&gt;</code></span></a></h2><h2 id="promise-t" tabindex="-1"><a class="header-anchor" href="#promise-t"><span><code>Promise&lt;T&gt;</code></span></a></h2><h2 id="async-函数" tabindex="-1"><a class="header-anchor" href="#async-函数"><span>async 函数</span></a></h2><p>async 函数的的返回值是一个 Promise 对象。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">const</span> p<span class="token operator">:</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token comment">/* ... */</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iterable-t" tabindex="-1"><a class="header-anchor" href="#iterable-t"><span><code>Iterable&lt;T&gt;</code></span></a></h2><p>对象只要部署了 Iterator 接口，就可以用<code>for...of</code>循环遍历。Generator 函数（生成器）返回的就是一个具有 Iterator 接口的对象。</p><p>TypeScript 使用泛型<code>Iterable&lt;T&gt;</code>表示具有 Iterator 接口的对象，其中<code>T</code>表示 Iterator 接口包含的值类型（每一轮遍历获得的值）。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Iterable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Iterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是<code>Iterable&lt;T&gt;</code>接口的定义，表示一个具有<code>Symbol.iterator</code>属性的对象，该属性是一个函数，调用后返回的是一个 Iterator 对象。</p><p>Iterator 对象必须具有<code>next()</code>方法，另外还具有两个可选方法<code>return()</code>和<code>throw()</code>，类型表述如下。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Iterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> IteratorResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span><span class="token operator">?</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> IteratorResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">throw</span><span class="token operator">?</span><span class="token punctuation">(</span>e<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> IteratorResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类型定义中，可以看到<code>next()</code>、<code>return()</code>、<code>throw()</code>这三个方法的返回值是一个部署了<code>IteratorResult&lt;T&gt;</code>接口的对象。</p><p><code>IteratorResult&lt;T&gt;</code>接口的定义如下。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IteratorResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">  done<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">//表示遍历是否结束</span></span>
<span class="line">  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> <span class="token comment">// 当前遍历得到的值</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类型定义表示，Iterator 对象的<code>next()</code>等方法的返回值，具有<code>done</code>和<code>value</code>两个属性。</p><p>下面的例子是 Generator 函数返回一个具有 Iterator 接口的对象。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>Iterable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">otherStringGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，生成器<code>g()</code>返回的类型是<code>Iterable&lt;string&gt;</code>，其中<code>string</code>表示 Iterator 接口包含的是字符串。</p><p>这个例子的类型声明可以省略，因为 TypeScript 可以自己推断出来 Iterator 接口的类型。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// infer string</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">otherStringGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，扩展运算符（<code>...</code>）后面的值必须具有 Iterator 接口，下面是一个例子。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">toArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">X</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>xs<span class="token operator">:</span> Iterable<span class="token operator">&lt;</span><span class="token constant">X</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">X</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>xs<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generator-函数" tabindex="-1"><a class="header-anchor" href="#generator-函数"><span>Generator 函数</span></a></h2><p>Generator 函数返回一个同时具有 Iterable 接口（具有<code>[Symbol.iterator]</code>属性）和 Iterator 接口（具有<code>next()</code>方法）的对象，因此 TypeScript 提供了一个泛型<code>IterableIterator&lt;T&gt;</code>，表示同时满足<code>Iterable&lt;T&gt;</code>和<code>Iterator&lt;T&gt;</code>两个接口。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IterableIterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Iterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面类型定义中，<code>IterableIterator&lt;T&gt;</code>接口就是在<code>Iterator&lt;T&gt;</code>接口的基础上，加上<code>[Symbol.iterator]</code>属性。</p><p>下面是一个例子。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> n<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token function">createNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// {value: 0, done: false}</span></span>
<span class="line">numbers<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// {value: 1, done: false}</span></span>
<span class="line">numbers<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// {value: 2, done: false}</span></span>
<span class="line">numbers<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>createNumbers()</code>返回的对象<code>numbers</code>即具有<code>next()</code>方法，也具有<code>[Symbol.iterator]</code>属性，所以满足<code>IterableIterator&lt;T&gt;</code>接口。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><ul><li><a href="https://www.geekabyte.io/2019/06/typing-iterables-and-iterators-with.html" target="_blank" rel="noopener noreferrer">Typing Iterables and Iterators with TypeScript</a></li></ul>`,40)]))}const i=n(p,[["render",o],["__file","es6.html.vue"]]),r=JSON.parse('{"path":"/guide/es6.html","title":"TypeScript 的 ES6 类型","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Map<K, V>","slug":"map-k-v","link":"#map-k-v","children":[]},{"level":2,"title":"Set<T>","slug":"set-t","link":"#set-t","children":[]},{"level":2,"title":"Promise<T>","slug":"promise-t","link":"#promise-t","children":[]},{"level":2,"title":"async 函数","slug":"async-函数","link":"#async-函数","children":[]},{"level":2,"title":"Iterable<T>","slug":"iterable-t","link":"#iterable-t","children":[]},{"level":2,"title":"Generator 函数","slug":"generator-函数","link":"#generator-函数","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"updatedTime":1742715351000,"contributors":[{"name":"mmmying","username":"mmmying","email":"987042638@qq.com","commits":1,"url":"https://github.com/mmmying"}],"changelog":[{"hash":"180dc214136a19bb36ec72f1f95d7965ea5a8cad","time":1742715351000,"email":"987042638@qq.com","author":"mmmying","message":"init"}]},"filePathRelative":"guide/es6.md"}');export{i as comp,r as data};
