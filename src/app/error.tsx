'use client';

import Error406 from 'template/components/errors/406';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Error406
      reset={() => reset()}
      reason={'Lamentamos, ocorreu um problema inesperado!'}
    />
  );
}
