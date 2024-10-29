import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Coder',
        1500,
        'Web developer',
        1500,
        'designer',
        1500,
        'Programer',
        1500
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-primary hover:text-complementary font-bold uppercase transition-colors duration-300"
      repeat={Infinity}
    />
  );
};

export default TextEffect;