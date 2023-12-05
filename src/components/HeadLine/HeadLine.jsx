import * as Style from "./HeadLine.style";

// eslint-disable-next-line react/prop-types
const HeadLine = ({ title, description }) => {
  return (
    <Style.HeadLineWrapper>
      <Style.Texts>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </Style.Texts>
    </Style.HeadLineWrapper>
  );
};

export default HeadLine;
