import Error406 from 'template/components/errors/406';

export default function NotFound() {
  return <Error406 reason={'Desculpe, não encontramos essa página'} />;
}
