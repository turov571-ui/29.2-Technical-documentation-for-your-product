from docx import Document
from docx.shared import Pt
import re

def create_docx(md_path, docx_path):
    doc = Document()
    doc.add_heading('Roadmap: Разработка ML-модели абстрактного водородного двигателя', 0)

    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Skip Mermaid block
        if line.startswith('```mermaid') or line == '```':
            continue

        # Headers
        if line.startswith('# '):
            doc.add_heading(line[2:], level=1)
        elif line.startswith('## '):
            doc.add_heading(line[3:], level=2)
        elif line.startswith('### '):
            doc.add_heading(line[4:], level=3)
        elif line.startswith('1. ') or line.startswith('2. ') or line.startswith('3. '):
            doc.add_heading(line[3:], level=1)
        elif line.startswith('- **'):
            # It's a list item with bold
            p = doc.add_paragraph(style='List Bullet')
            match = re.match(r'- \*\*(.*?)\*\*:(.*)', line)
            if match:
                p.add_run(match.group(1) + ':').bold = True
                p.add_run(match.group(2))
            else:
                p.add_run(line[2:])
        elif line.startswith('    - ') or line.startswith('  - '):
            p = doc.add_paragraph(style='List Bullet 2')
            p.add_run(line.strip()[2:])
        elif line.startswith('    i. ') or line.startswith('    ii. ') or line.startswith('    iii. '):
             p = doc.add_paragraph(style='List Bullet 3')
             p.add_run(line.strip()[3:])
        elif line.startswith('i. ') or line.startswith('ii. ') or line.startswith('iii. '):
             p = doc.add_paragraph(style='List Bullet 2')
             p.add_run(line.strip()[3:])
        else:
            # Regular text or other markdown bits
            if line.startswith('**') and line.endswith('**'):
                doc.add_paragraph(line[2:-2]).bold = True
            elif line.startswith('Цель:'):
                p = doc.add_paragraph()
                p.add_run('Цель: ').bold = True
                p.add_run(line[5:].strip())
            elif not any(line.startswith(x) for x in ['#', '-', '`']):
                doc.add_paragraph(line)

    doc.save(docx_path)

if __name__ == "__main__":
    create_docx('my-site/docs/hydrogen-engine/roadmap.md', 'Hydrogen_Engine_ML_Roadmap.docx')
