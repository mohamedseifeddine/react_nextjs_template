import React, { useState } from 'react'
import Head from 'next/head'
import styles from 'shared/styles/Home.module.scss'
import { NEXT_PUBLIC_USER_NAME } from 'config'
import { Row, Col, DatePicker, Card, Button, Modal, Timeline } from 'antd'

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row gutter={24}>
          <h1 className={styles.title}>
            Welcome {NEXT_PUBLIC_USER_NAME} to{' '}
            <a href="https://nextjs.org">Next.js + Ant design !</a>
          </h1>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Card
              title="Button"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <Button type="primary" shape="round">
                Simple Button
              </Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Modal"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Some contents...</p>
              </Modal>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Date picker"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <DatePicker />
            </Card>
          </Col>

          <Col span={6}>
            <Card
              title="Time line"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
