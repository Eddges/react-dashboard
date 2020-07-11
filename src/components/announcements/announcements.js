import React from 'react'
import classes from './announcements.module.css'
import { Tag, Divider } from 'antd';

class Announcements extends React.Component{
    render() {

        const anns = [{
            main : "Notice is the legal concept describing a requirement that a party be aware of legal process affecting their rights, obligations or duties. There are several types of notice: public notice, actual notice, constructive notice, and implied notice.",
            Tag_1 : false,
            Tag_2 : true,
            Tag_3 : true,
            Tag_4 : true

        }, {
            main : "Notice is the legal concept describing a requirement that a party be aware of legal process affecting their rights, obligations or duties. There are several types of notice: public notice, actual notice, constructive notice, and implied notice.",
            Tag_1 : true,
            Tag_2 : false,
            Tag_3 : true,
            Tag_4 : true

        }, {
            main : "Notice is the legal concept describing a requirement that a party be aware of legal process affecting their rights, obligations or duties. There are several types of notice: public notice, actual notice, constructive notice, and implied notice.",
            Tag_1 : true,
            Tag_2 : true,
            Tag_3 : true,
            Tag_4 : true

        }, {
            main : "Notice is the legal concept describing a requirement that a party be aware of legal process affecting their rights, obligations or duties. There are several types of notice: public notice, actual notice, constructive notice, and implied notice.",
            Tag_1 : false,
            Tag_2 : true,
            Tag_3 : false,
            Tag_4 : true

        }, {
            main : "Notice is the legal concept describing a requirement that a party be aware of legal process affecting their rights, obligations or duties. There are several types of notice: public notice, actual notice, constructive notice, and implied notice.",
            Tag_1 : true,
            Tag_2 : false,
            Tag_3 : false,
            Tag_4 : false

        }]

        const items = anns.map((iterator, index) => (
            <div className={classes.Item} key={index}>
                <div className={classes.Main}>
                    <p>
                        {iterator.main}
                    </p>
                </div>
                <div className={classes.Tags}>
                    {iterator.Tag_1 ? <Tag color="volcano">Tag 1</Tag> : null}
                    {iterator.Tag_2 ? <Tag color="blue">Tag 2</Tag> : null}
                    {iterator.Tag_3 ? <Tag color="gold">Tag 3</Tag> : null}
                    {iterator.Tag_4 ? <Tag color="#108ee9">Tag 4</Tag> : null}
                    {/* <Tag color="volcano">Warning</Tag>
                    <Tag color="blue">Tag 2</Tag>
                    <Tag color="gold">Tag 3</Tag>
                    <Tag color="#108ee9">Tag 4</Tag> */}
                </div>
            </div>
        ))

        return(
            <div className={classes.Announcements}>
                {items}
            </div>
        )
    }
}

export default Announcements