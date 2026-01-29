const ErrorMessage = ({ message, error }) => {
    console.error(error)
    return (
  <div className="flex justify-center items-center py-8">
    <div className="text-red-500">Erro ao carregar treinos: {message}</div>
  </div>
    )
};

export default ErrorMessage;