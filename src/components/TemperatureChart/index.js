import { useMemo } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns'
import s from './style.module.css';



const Index = ({list}) => {
    const weather = useMemo(() => {
        return list.map((item, index) => {
            return {
                name: format(new Date(item.dt_txt), 'yyyy-MM-dd'),
                uv: item.main.temp,
                pv: index,
            }
        })
    }, [list]);

    if (list.length === 0) {
        return null;
    }

    console.log('####: weather', weather);

    return (
        <div className={s.root}>
            <LineChart width={768} height={400} data={weather}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )
}
export default Index
