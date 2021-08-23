/** Describe the purpose of the BoilerPlate component here.*/

type IProps = {
    className?: string;
}

const BoilerPlate: React.FC<IProps> = ({ className }) => {
    return (
      <div className={className}></div>
    );
}
export default BoilerPlate;
