import React from 'react'
import { BlogLink, InfoBlog , InfoRow, Heading, Subtitle, Img} from './BlogElement'
import img1 from ".../../../src/images/event1.jpg"
import img2 from ".../../../src/images/event5.jpg"

const Blog = () => {
    return (
        <div>
           <BlogLink>
                <InfoRow>
                    <InfoBlog>
                    <article>
                        <Heading>Hi everyone Hi everyone Hi ev</Heading>
                    </article>
                   
                    <Img src={img2} width={500}/>
                    <Subtitle>
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone, 
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone,
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone
                    </Subtitle>
                    </InfoBlog>

                    <InfoBlog>
                    <article>
                    <Heading>Hi everyone Hi everyone Hi everyone Hi everyone</Heading>
                        
                    </article>
                   
                    <Img src={img1} width={500}/>
                    <Subtitle>
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone, 
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone,
                    Hi everyone Hi everyone Hi everyone Hi everyone, Hi everyone Hi everyone Hi everyone Hi everyone
                    </Subtitle>
                    </InfoBlog>
                </InfoRow>
           </BlogLink>

            
        </div>
    )
}

export default Blog

