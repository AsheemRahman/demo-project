import { useRef, useState } from "react"


export const Form = () => {
    const [lines, setLines] = useState(1);
    const [items, setItems] = useState(1);
    const [color, setColor] = useState("red");
    const valueRef = useRef<HTMLInputElement>(null);
    const lineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLines(Number(e.target.value));
    }
    const itemsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItems(Number(e.target.value));
    }
    const colorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <form className="gap-10">
                <select id="name" onChange={colorChange} name="name" className="mb-5 border-2 border-gray-500 bg-white text-black w-[500px] h-12 rounded-xl " >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <div className="flex flex-col justify-center items-center mt-3">
                    <label htmlFor="lines" className="text-lg text-gray-600 mb-3" >Total Lines</label>
                    <input min={1} value={lines} ref={valueRef} onChange={lineChange} type="number" className="border-gray-500 border rounded-xl" />
                </div>
                <div className="flex flex-col justify-center items-center mt-3">
                    <label htmlFor="items" className="text-lg text-gray-600 mb-3" >Items in Line</label>
                    <input min={1} value={items} ref={valueRef} onChange={itemsChange} type="number" name="lines" className="border-gray-500 border rounded-xl" />
                </div>
            </form>
            <div>

                {/* {Array.from({ length: lines }, (_, lineIndex) => (
                    <div key={lineIndex} className="flex justify-center mt-5">
                        {Array.from({ length: lines }, (_, itemIndex) => (
                            <div key={itemIndex} className={` h-4 w-40 bg-${color}-500 border border-black rounded-lg`}></div>
                        ))}
                    </div>
                ))} */}
                {Array.from({ length: lines }, (_, lineIndex) => (
                    <div key={lineIndex} className="flex justify-center mt-5">
                        {Array.from({ length: items }, (_, itemIndex) => (
                            <div key={itemIndex} className={` h-4 w-40 bg-${color}-500 border border-black rounded-lg`}></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
