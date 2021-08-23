/** Describe the purpose of the BoilerPlate component here.*/

type IProps = {
    className?: string;
}

const BoilerPlate: React.FC<IProps> = ({ className, children }) => {
    return (
      <div className={className}>{children}</div>
    );
}
export default BoilerPlate;
