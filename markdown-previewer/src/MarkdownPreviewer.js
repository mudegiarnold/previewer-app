import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `

# Hello,

## Welcome to degiTech 
### Where we create for you the most efficient and seamless website for your business.

[visit my github account ](https://github.com/mudegiarnold)

\`<div>inline code</div>\`

\`\`\`
const multipleLineCode = (parem) => {
  if(parem) {
  return parem
  }
  }
\`\`\`

**some bold text**

> Blockquote

1. Website creation and hosting 
2. Business branding 
3. social media management 

[image](https://images.unsplash.com/photo-1625662171040-8d196a082232?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
          };

            return (
                <div className="container">
                      <textarea
                              id="editor"
                                      value={markdown}
                                              onChange={handleChange}
                                                    />
                                                          <div
                                                                  id="preview"
                                                                          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                                                                                />
                                                                                    </div>
                                                                                      );
                                                                                      };

                                                                                      export default MarkdownPreviewer;
