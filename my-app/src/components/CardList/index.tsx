import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

/**
 * 营销卡片渲染数据
 */
export interface IDirectVoucher {
  /** 品牌名 */
  brandName?: string;
  /** 品牌logo */
  brandLogo?: string;
  /** 距离描述 */
  distanceDesc?: string;
  /** 活动素材图 */
  campImage?: string;
  /** 营销标签 */
  promoLogo?: string | string[];
  /** 券描述 */
  voucherDesc?: string;
  /** 券 */
  benefitAmount?: string;
  /** 特价券原价 */
  oriPriceAmount?: string;
  /** 折扣描述 */
  discountDesc?: string;
  /** 库存 */
  voucherStockNum?: string;
}

const cardDataList: IDirectVoucher[] = [
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*y6CTRo9L2oEAAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    oriPriceAmount: '28',
    discountDesc: '0.6折',
    voucherStockNum: '库存888份',
  },
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    discountDesc: '0.6折',
  },
  {
    brandName: '飞猪',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*dCL5Q4oBaQsAAAAAAAAAAAAAARQnAQ',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*MZ7VSaNZXRYAAAAAAAAAAAAAARQnAQ',
    promoLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*90WEQLmnKdkAAAAAAAAAAAAAARQnAQ',
    voucherDesc: '南方航空20元优惠券',
    benefitAmount: '20',
  },
];

interface ICardProps {
  idx: number;
  data: IDirectVoucher;
}

const mockPurchaseRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 1000); // 模拟1秒延迟
  });
};

const Card: React.FC<ICardProps> = ({ data, idx }) => {
  const promoLogos = Array.isArray(data.promoLogo) ? data.promoLogo : [data.promoLogo].filter(Boolean);

  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const [isCounting, setIsCounting] = useState<boolean>(true);

  useEffect(() => {
    if (timeLeft > 0 && isCounting) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsCounting(false);
    }
  }, [timeLeft, isCounting]);

  const handlePurchase = async () => {
    if (!isPurchased && !isCounting) {
      const result = await mockPurchaseRequest();
      if (result === 'success') {
        setIsPurchased(true);
      }
    }
  };

  return (
    <div className="card">
      <div className='left-box'>
        <div className="card-header">
          <div className='brand-logo-box'>
            <img src={data.brandLogo} alt={`${data.brandName} logo`} className="brand-logo" />
            <div className="brand-name">{data.brandName}</div>
          </div>
          <div className="distance">{data.distanceDesc}</div>
        </div>
        <div className="card-body">
          <img src={data.campImage} alt="Campaign" className="campaign-image" />
          <div className='body-center'>
            <div className='promo-logo-box'>
              {promoLogos.map((logo, index) => (
                <img key={index} src={logo} alt="Promotion" className="promo-logo" />
              ))}
            </div>
            <div className="voucher-desc">{data.voucherDesc}</div>
            <div className="pricing">
              <span className="benefit-amount">{`${data.benefitAmount}元`}</span>
              {data.oriPriceAmount && (
                <span className="original-price">{`${data.oriPriceAmount}元`}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <span className="discount-desc">{data.discountDesc}</span>
        <button
          className='btn'
          onClick={handlePurchase}
          disabled={isPurchased || isCounting}
        >
          {isPurchased ? '已抢购' : isCounting ? `${timeLeft}s` : '抢购'}
        </button>
        <span className="stock">{data.voucherStockNum}</span>
      </div>
    </div>
  );
};

const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
  return (
    <>
      {props.list.map((data, index) => (
        <Card data={data} idx={index} />
      ))}
    </>
  );
};
export default CardList;

/**
 * 外部调用示例： <CardList list={cardDataList} />
 * cardDataList 数据从外部调用的地方传入
 */

// ReactDOM.render(<CardList list={cardDataList} />, document.getElementById('app'));



