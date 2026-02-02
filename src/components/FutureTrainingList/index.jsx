import { useQuery } from "@apollo/client";
import { GET_FUTURE_TRAININGS } from "../../../database/graphql/query/futureTrainings";
import { useState } from "react";

export function FutureTrainingsList() {
  const { data, loading, error } = useQuery(GET_FUTURE_TRAININGS);
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <p>Carregando treinos futuros...</p>;
  if (error) return <p>Erro ao carregar treinos 😢</p>;

  return (
    <section className="mb-3">
      <div className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green-lime focus:border-transparent transition-colors duration-200">
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <h2 className="text-sm text-gray-700 flex items-center gap-2">
            Treinos Futuros
          </h2>

          <span className="flex items-center justify-between">
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mt-4 space-y-4">
            {data.allFutureTrainings.map((training) => (
              <li
                key={training.title}
                className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0"
              >
                <div>
                  <p className="font-medium text-gray-700">{training.title}</p>
                  <p className="text-sm text-gray-500">Data: {training.date}</p>
                </div>

                <span className="text-sm font-semibold text-brand-lime">
                  {training.plannedDistance}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
