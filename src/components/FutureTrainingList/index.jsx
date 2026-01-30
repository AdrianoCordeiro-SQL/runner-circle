import { useQuery } from '@apollo/client';
import { GET_FUTURE_TRAININGS } from "../../../database/graphql/query/futureTrainings";


export function FutureTrainingsList() {
  const { data, loading, error } = useQuery(GET_FUTURE_TRAININGS);

  if (loading) return <p>Carregando treinos futuros...</p>;
  if (error) return <p>Erro ao carregar treinos 😢</p>;

  return (
    <section className="mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Treinos Futuros</h2>

        <ul className="space-y-4">
            {data.allFutureTrainings.map((training) => (
            <li 
                key={training.title}
                className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0"
            >
                <div>
              <p className="font-medium text-gray-700">
                {training.title}
              </p>
              <p className="text-sm text-gray-500">
                Data: {training.date}
              </p>
            </div>

            <span className="text-sm font-semibold text-brand-lime">
              {training.plannedDistance}
            </span>
            </li>
            ))}
        </ul>
        </div>
    </section>
  );
}
