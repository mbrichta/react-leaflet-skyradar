const router = require('express').Router();
const axios = require('axios');

try {
    router.get("/area/:lamin/:lomin/:lamax/:lomax", async (req, res) => {
        const lamin = req.params.lamin;
        const lamax = req.params.lamax;
        const lomin = req.params.lomin;
        const lomax = req.params.lomax;

        const areaRes = await axios.get(`https://${process.env.OPENSKY_USER}:${process.env.OPENSKY_PASS}@opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`);

        res.json(areaRes.data)
    })
} catch (error) {
    console.log(error);
}

module.exports = router;