import React, { useState } from "react";
import "./App.css";

type Cooperativa = {
  id: number;
  nome: string;
  filiacao: string;
};

const App = () => {
  const [cooperativas, setCooperativas] = useState<Cooperativa[]>([]);
  const [favoraveis, setFavoraveis] = useState<number[]>([]);
  const [contrarias, setContrarias] = useState<number[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          setCooperativas(json);
        } catch (err) {
          alert("Erro ao ler o arquivo. Verifique o formato JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

  const toggleFavoravel = (id: number) => {
    setFavoraveis((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    setContrarias((prev) => prev.filter((i) => i !== id));
  };

  const toggleContraria = (id: number) => {
    setContrarias((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    setFavoraveis((prev) => prev.filter((i) => i !== id));
  };

  return (
    <div className="app-container">
      <div className="upload-section">
        <input type="file" accept=".json" onChange={handleUpload} />
      </div>
      <div className="listas-container">
        <div className="lista-cooperativas">
          <h2>Lista de Cooperativas</h2>
          <ul>
            {cooperativas.map((coop) => (
              <li key={coop.id}>
                <span>{coop.nome}</span>
                <span className="filiacao">({coop.filiacao})</span>
                <div className="botoes-voto">
                  <button onClick={() => toggleFavoravel(coop.id)} className={favoraveis.includes(coop.id) ? "ativo" : ""}>Favorável</button>
                  <button onClick={() => toggleContraria(coop.id)} className={contrarias.includes(coop.id) ? "ativo" : ""}>Contrária</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="votacao-status">
          <div>
            <h2>Favoráveis ({favoraveis.length})</h2>
            <ul>
              {cooperativas.filter((c) => favoraveis.includes(c.id)).map((c) => (
                <li key={c.id}>{c.nome}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contrárias ({contrarias.length})</h2>
            <ul>
              {cooperativas.filter((c) => contrarias.includes(c.id)).map((c) => (
                <li key={c.id}>{c.nome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;