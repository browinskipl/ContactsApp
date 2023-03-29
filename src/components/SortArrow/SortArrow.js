import { SortDirection} from "react-virtualized";

const SortArrow = ({ direction }) => {
    if (!direction) {
        return null;
    }

    if (direction === SortDirection.ASC) {
        return <span>&uarr;</span>;
    } else {
        return <span>&darr;</span>;
    }
};

export default SortArrow;