export const FbnameEvent = async (event_name: string, data: unknown) => {
  const { default: ReactPixel } = await import('react-facebook-pixel');
  ReactPixel.init('');
  ReactPixel.track(event_name, { data });
};
