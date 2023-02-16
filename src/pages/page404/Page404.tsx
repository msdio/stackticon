import { useNavigate } from 'react-router-dom';

interface Page404Props {
  title: string;
}

const Page404 = ({ title }: Page404Props) => {
  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <button>
          <span>메인으로 가기</span>
        </button>
        <button onClick={handlePreviousPage}>
          <span>뒤로가기</span>
        </button>
      </div>
    </div>
  );
};

export default Page404;
