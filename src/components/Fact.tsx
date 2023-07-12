
import { useEffect, useState } from "react";


const Fact = () => {
	let [fact, setFact] = useState("");
	useEffect(() => {
		let facts_raw = fetch("http://localhost:8080/").then(x => x.json()).then(x => setFact(x.fact));

	}, [])
	return (
		<h1 className="text-center">
			{fact}
		</h1>
	)
}

export default Fact;

