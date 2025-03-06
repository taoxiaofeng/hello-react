import React, { useState } from 'react'
import styles from './index.module.less'
import { Button, Image } from 'antd'

const RotateCards = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.card} ${active ? styles.active : ''}`}>
      <div className={styles.face}>
        <Image
          width={400}
          height={400}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Button type="primary" onClick={() => setActive(true)}>UP</Button>
      </div>
      <div className={styles.back}>
        <Button type="primary" onClick={() => setActive(false)}>BACK</Button>
        <span>床前明月光，疑是地上窗，举头望明月，低头思故乡</span>
      </div>
    </div>
  )
}

export default RotateCards
