import { NOT_EKLE, NOT_SIL, VERILERI_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: JSON.parse(localStorage.getItem(s10chLocalStorageKey)) || [],
};

export default function myReducers(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE: {
      const newNot = {
        ...state,
        notlar: [...state.notlar, action.payload],
      };
      newNot.notlar.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return newNot;
    }
    case NOT_SIL: {
      return {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      };
    }
    case VERILERI_SIL: {
      return {
        ...state,
        notlar: [],
      };
    }
    default:
      return state;
  }
}
