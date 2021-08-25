type IProps = {
    className?: string;
}

const BoilerPlate: React.FC<IProps> = ({ className, children }) => {
    return (
      <div className={className}>{children}</div>
    );
}
export default BoilerPlate;
