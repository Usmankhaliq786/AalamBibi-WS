import React from 'react'
import style from "./SuccessStories.module.css"

function SuccessStories({ data }) {
    console.log(data)
    return (
        <section className={`spacing ${style.successStories}`}  >
            <div className='container'  >
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2>Success Stories of Aalam Bibi Foundation</h2>
                    </div>
                    {data?.map((item) => (
                        <div className="col-md-11" key={item.id} >
                            <div className={style.storyWrap} >
                            <strong  >{item.title}</strong>
                            <span className='d-block' >{item.name}</span>
                            <p className='m-0' >{item.story}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default SuccessStories