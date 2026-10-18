"""Inline all local images into one HTML file that can be sent to the client."""
import base64, os, re

here = os.path.dirname(os.path.abspath(__file__))
html = open(os.path.join(here, 'index.html'), encoding='utf-8').read()


def inline(m):
    path = os.path.join(here, m.group(2))
    data = base64.b64encode(open(path, 'rb').read()).decode()
    return f'{m.group(1)}"data:image/webp;base64,{data}"'


html = re.sub(r'<link rel="preload"[^>]*>\n', '', html)  # nothing to preload once images are inlined
html = re.sub(r'((?:src|href)=)"(img/[^"]+\.webp)"', inline, html)
out = os.path.join(here, 'velvet-clean-szkic.html')
open(out, 'w', encoding='utf-8').write(html)
left = re.findall(r'"img/[^"]+"', html)
print(f'{out} {os.path.getsize(out) / 1e6:.1f} MB, unresolved: {left}')
