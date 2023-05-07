import { Card, Col, Row, Avatar, Image,Input } from 'antd';

import { Spin } from 'antd';
import { useState } from 'react';
const TaskThree = ({photos,loading}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  if (loading) {
    return <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Spin spinning={loading}></Spin>
    </div>;
  }

  if (!photos || photos.length === 0) {
    return <p>No photos found.</p>;
  }

  const filteredPhotos = searchQuery
    ? photos.filter((photo) =>
        photo.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : photos;
return(
  <>
  <Input
        placeholder="Search by title"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "1rem" }}
      />
  
  <Spin spinning={loading}>
  <Row wrap={true}>
    
    {
      filteredPhotos.map((photo)=>(
        <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{padding:"10px"}}>
        <Card
    style={{
      width: "100%",
    }}
    cover={
      <Image src={photo.url} width={"100%"} height={200} />

    }
  >
    <Row style={{ display: 'flex', alignItems: 'center',columnGap:"10px" }}>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
      <Avatar src={photo.thumbnailUrl} />
      </Col>
      <Col xs={18} sm={18} md={18} lg={18} xl={18}>
      <h4>{photo.title}</h4>
      </Col>
    </Row>
  </Card>
        </Col>
      ))
    }
  </Row>
  </Spin>
  </>
)};
export default TaskThree;
