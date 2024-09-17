import './styles.css';
import Image from 'next/image';
import Link from 'next/link';

import FooterImage from '../../../../../public/assets/error/footer.svg';
import OpsImage from '../../../../../public/assets/error/ops.svg';

type Error406Props = {
  reset?: () => void | undefined;
  reason: string;
};

const Error406 = ({ reset, reason }: Error406Props) => {
  return (
    <div className="Container-error-406">
      <div className="Item-error-406"></div>

      <div className="Item-error-406">
        <div className="Item-error-406-about">
          <Image src={OpsImage} alt="Ops!" height={100} width={100} />
          <p>{reason}</p>
          {reset !== undefined ? (
            <h1 onClick={() => reset()}>Clique aqui para tentar novamente!</h1>
          ) : (
            <Link href={'/'}>
              <div className="Item-error-406-about">
                <h1>Ir para a página inicial</h1>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className="Item-error-406">
        <div className="Container-error-406-art">
          <Image src={FooterImage} alt="footer" />
        </div>
        <div className="Container-error-406-footer"></div>
      </div>
    </div>
  );
};

export default Error406;
