// http://localhost:3000/api/contenthome

import { sites } from "../../../data_home";

export default function handler(req, res) {
  res.status(200).json(sites);
}
