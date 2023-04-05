import { SortDirection} from "react-virtualized";

const SortArrow = ({ direction}) => {
    //tu moglbys przypisac default value do direction i zawsze je wyswietlac
    if (!direction) {
        return null;
    }

    return direction === SortDirection.ASC ? <span>&uarr;</span> : <span>&darr;</span>
};

export default SortArrow;