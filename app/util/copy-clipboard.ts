export function copyClipboard() {
    document.querySelectorAll('pre > code').forEach((codeblock: HTMLElement) => {
        const container = codeblock.parentNode?.parentNode as HTMLElement;

        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        const copyIcon = document.createElement('img');
        const copiedIcon = document.createElement('img');
        copyIcon.src = '/img/content_copy.svg';
        copiedIcon.src = '/img/copied_tick.svg';
        copyIcon.alt = 'copy';
        copybutton.innerHTML = 'copy';
        copybutton.style.display = 'inline-block';
        copyIcon.style.display = 'inline-block';
        copybutton.appendChild(copyIcon);

        function copyingDone() {
            copybutton.classList.add('copied');
            copybutton.innerHTML = 'copied!';
            copybutton.style.display = 'inline-block';
            copiedIcon.style.display = 'inline-block';
            copybutton.appendChild(copiedIcon);
            setTimeout(() => {
                copybutton.classList.remove('copied');
                copybutton.innerHTML = 'copy';
                copybutton.style.display = 'inline-block';
                copyIcon.style.display = 'inline-block';
                copybutton.appendChild(copyIcon);
            }, 2000);
        }

        copybutton.addEventListener('click', () => {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent || "");
                copyingDone();
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { };
            selection?.removeRange(range);
        });

        if (container?.classList.contains("highlight")) {
            container.appendChild(copybutton);
        } else if (container?.parentNode?.firstChild == container) {
            // td containing LineNos
        } else if (codeblock.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.nodeName == "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.appendChild(copybutton);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode?.appendChild(copybutton);
        }
    });
}


/*

    document.querySelectorAll('pre > code').forEach((codeblock) => {
        const container = codeblock.parentNode.parentNode;

        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        
        const copyIcon = document.createElement('img');
        copyIcon.src = '/img/content_copy.svg'; // Change the path to your SVG file
        copyIcon.alt = 'Copy';
        copybutton.appendChild(copyIcon);

        function copyingDone() {
            // You may change the button appearance or text after copying
            copybutton.innerHTML = 'copied!';
            setTimeout(() => {
                copyIcon.src = '/img/content_copy.svg'; // Reset to original icon after 2 seconds
            }, 2000);
        }

        copybutton.addEventListener('click', (cb) => {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent);
                copyingDone();
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { };
            selection.removeRange(range);
        });

        if (container.classList.contains("highlight")) {
            container.appendChild(copybutton);
        } else if (container.parentNode.firstChild == container) {
            // td containing LineNos
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode.appendChild(copybutton);
        }
    });

    document.querySelectorAll('pre > code').forEach((codeblock) => {
        const container = codeblock.parentNode.parentNode;

        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        const copyIcon = document.createElement('img');
        const copiedIcon = document.createElement('img');
        copyIcon.src = '/img/content_copy.svg';
        copiedIcon.src = '/img/copied_tick.svg';
        copyIcon.alt = 'copy';
        copybutton.innerHTML = 'copy';
        copybutton.style.display = 'inline-block';
        copyIcon.style.display = 'inline-block';
        copybutton.appendChild(copyIcon);

        function copyingDone() {
            copybutton.classList.add('copied');
            copybutton.innerHTML = 'copied!';
            copybutton.style.display = 'inline-block';
            copiedIcon.style.display = 'inline-block';
            copybutton.appendChild(copiedIcon);
            setTimeout(() => {
                copybutton.classList.remove('copied');
                copybutton.innerHTML = 'copy';
                copybutton.style.display = 'inline-block';
                copyIcon.style.display = 'inline-block';
                copybutton.appendChild(copyIcon);
            }, 2000);
        }

        copybutton.addEventListener('click', (cb) => {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent);
                copyingDone();
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { };
            selection.removeRange(range);
        });

        if (container.classList.contains("highlight")) {
            container.appendChild(copybutton);
        } else if (container.parentNode.firstChild == container) {
            // td containing LineNos
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode.appendChild(copybutton);
        }
    });

 */