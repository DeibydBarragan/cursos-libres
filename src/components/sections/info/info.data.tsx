import { FcLike, FcSportsMode, FcReading, FcConferenceCall, FcDebt } from "react-icons/fc";
import { WellbeingInfo } from "./interfaces";

export const infoAreas: WellbeingInfo[] = [
  {
    title: "Actividad Física y Deporte",
    icon: <FcSportsMode size="100%"/>,
    phone: "316 5000 Ext. 17214 - 17215",
    email: "deportes_bog@unal.edu.co",
    color: "green.800"
  },
  {
    title: "Acompañamiento Integral",
    icon: <FcConferenceCall size="100%"/>,
    phone: "316 5000 Ext. 17171 - 17172",
    email: "aaintegral@unal.edu.co",
    color: "blue.800"
  },
  {
    title: "Cultura",
    icon: <FcReading size="100%"/>,
    phone: "316 5000 Ext. 17248,17247 y 17241",
    email: "culturabien_bog@unal.edu.co",
    color: "yellow.800"
  },
  {
    title: "Gestión y Fomento Socioeconómico",
    icon: <FcDebt size="100%"/>,
    phone: "316 5000 Ext. 10655",
    email: "agfse_bog@unal.edu.co",
    color: "red.800"
  },
  {
    title: "Salud",
    icon: <FcLike size="100%"/>,
    phone: "1316 5000 Ext. 21061 - 21072",
    email: "areasalud_bog@unal.edu.co",
    color: "purple.800"
  }
]