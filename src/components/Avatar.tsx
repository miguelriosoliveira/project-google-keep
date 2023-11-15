import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {}

export function Avatar(props: Props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />;
}
