import { Card } from 'antd'

const CardBox = ({ img, id, title }) => {
    return (
        <Card key={id} 
            hoverable
            style={{
                width: 300,
                flexDirection: "column",
                textAlign: "center",
            }}
            cover={<img style={{width: "100%", height: "100%"}} alt="example" src={`https://image.tmdb.org/t/p/w500/${img}`} />}
            title={title}
            type='assss'
        >
        </Card>
    )
}

export default CardBox
