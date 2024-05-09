---
title: Markdown Syntax Guide
description: List of unique markdown methods and some custom markdown syntax for writing articles for server x 101.
author: Gautam Ankoji
lastmod: 2024-04-09
publishdate: 2024-04-09
tags:
    - markdown
    - syntax
draft: false
---
Certainly! Below are various Markdown stylings you can use:

## Headers

* Headers in Markdown Syntax

{{< file "markdown" "article.md" >}}

```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

{{< tabgroup >}}

{{< tab icon="html" name="Heading Tags">}}

<div class="highlight">
<pre class="chroma">
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Emphasis

* Emphasis in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
*italic*
**bold**
***bold and italic***
~~strikethrough~~
```

{{< tabgroup >}}

{{< tab icon="html" name="Emphasis Tags">}}

<div class="highlight">
<pre class="chroma">
<i>italic</i>
<b>bold</b>
<em>bold and italic</em>
<s>strikethrough</s>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Lists

* Headers in Markdown Syntax:

#### Unordered List

* Unordered List in Markdown Syntax

{{< file "markdown" "article.md" >}}

```md
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
```

{{< tabgroup >}}

{{< tab icon="html" name="Unordered List">}}

<div class="highlight">
<pre class="chroma">
•&emsp;Item 1
•&emsp;Item 2
  •&emsp;Subitem 1
  •&emsp;Subitem 2
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

#### Ordered List

* Ordered List in Markdown Syntax

{{< file "markdown" "article.md" >}}

```md
1. First item
2. Second item
   1. Subitem 1
   2. Subitem 2
```

{{< tabgroup >}}

{{< tab icon="html" name="Ordered List">}}

<div class="highlight">
<pre class="chroma">
1.&emsp;First item
2.&emsp;Second item
   1.&emsp;Subitem 1
   2.&emsp;Subitem 2
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Links

* Links in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
[Link Test](http://serverx.org.in/)
```

{{< tabgroup >}}

{{< tab icon="html" name="Links">}}

<div class="highlight">
<pre class="chroma">
<a href="http://serverx.org.in/">Link Text</a>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Images

* Images in Markdown Syntax:

* For online links:

{{< file "markdown" "article.md" >}}

```md
![Link text](https://jsd.012700.xyz/gh/jerryc127/CDN/img/Markdown-Style-test-cover.png)
```

{{< tabgroup >}}

{{< tab icon="html" name="Images">}}

<div class="highlight">
<pre class="chroma">
<img src="https://jsd.012700.xyz/gh/jerryc127/CDN/img/Markdown-Style-test-cover.png" alt="Markdown-Style-test-cover">
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

* For local images:

```md
- articles
  └── markdown-syntax-guide
       ├── img
       │    ├── featured.png
       │    └── sample.png
       └── index.md
```

{{< file "markdown" "article.md" >}}

```md
![sample Image](img/sample.png)
```

{{< tabgroup >}}

{{< tab icon="html" name="Heading Tags">}}

<div class="highlight">
<pre class="chroma">
<img src="/articles/markdown-syntax-guide/img/sample.png" alt="Markdown-Style-test-cover"/>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Blockquotes

* Blockquotes in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
> This is a blockquote
```

{{< tabgroup >}}

{{< tab icon="html" name="Blockquotes">}}

<div class="highlight">
<pre class="chroma">
<blockquote>
  <span>This is a blockquote</span>
  <span></span>
</blockquote>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Code Snippets

* Code Snippets in Markdown Syntax:

For SERVER X 101 articles, remove those spaces infront of ``` for making it work

{{< file "markdown" "article.md" >}}

```md
{{ < file "terminal" "terminal" > }}
    ```py
    code block
    ```
```

{{< tabgroup >}}

{{< tab icon="html" name="Code Snippet">}}

<div class="highlight">
<pre class="chroma">
{{< file "terminal" "terminal" >}}

```py
code block
```

</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Horizontal Rule

* Horizontal Rule in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
---
```

{{< tabgroup >}}

{{< tab icon="html" name="Horizontal Rule">}}

<div class="highlight">
<pre class="chroma">
<hr>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Tables

* Tables in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

{{< tabgroup >}}

{{< tab icon="html" name="Table">}}

<div class="highlight">
<pre class="chroma">
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

---

## Task Lists

* HeadTask Listsers in Markdown Syntax:

{{< file "markdown" "article.md" >}}

```md
- [x] Task 1
- [ ] Task 2
```

{{< tabgroup >}}

{{< tab icon="html" name="Task List">}}

<div class="highlight">
<pre class="chroma">
• &#10003; Task 1
• &#10063; Task 2
</ul>
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}
