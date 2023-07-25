import  React ,{
createContext,
ReactNode,
SetStateAction,
useState
} from "react";

export const UseContext = createContext({
  categories: [] as Array<string>,
    favorite: [] as Array<string>,
    setCategory: (category: SetStateAction<string[]>) => {},
    setFavorite: (favorite: SetStateAction<string[]>) => { },
    movies: [] as Array<string>,
  setMovie: (movie: SetStateAction<string[]>) => { },
});
type Props = {
children: ReactNode,
}
export const UseProvider = (props: Props) => {
const {children} = props;
const [categories,setCategory] = useState<Array<string>>([]);
    const [favorite, setFavorite] = useState<Array<string>>([]);
    const [movies, setMovie] = useState<Array<string>>([]);
    return (
        <UseContext.Provider value={{ categories,setCategory,favorite,setFavorite,movies,setMovie}}>
            {children}
    </UseContext.Provider>
)
        }