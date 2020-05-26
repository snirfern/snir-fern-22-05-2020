export const singleCity = [
  {
    City: "TEL AVIV",
    Key: "215793",
    LocalObservationDateTime: "2020-05-22T17:35:00+03:00",
    EpochTime: 1590158100,
    WeatherText: "Partly sunny",
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 25,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 77,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
  },
];

export const fiveNextDays = {
  Headline: {
    EffectiveDate: "2020-05-23T20:00:00+03:00",
    EffectiveEpochDate: 1590253200,
    Severity: 3,
    Text: "Thunderstorms Saturday night",
    Category: "thunderstorm",
    EndDate: "2020-05-24T08:00:00+03:00",
    EndEpochDate: 1590296400,
    MobileLink:
      "http://m.accuweather.com/en/il/haifa/213181/extended-weather-forecast/213181?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2020-05-22T07:00:00+03:00",
      EpochDate: 1590120000,
      Temperature: {
        Minimum: {
          Value: 69,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 84,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us",
    },
    {
      Date: "2020-05-23T07:00:00+03:00",
      EpochDate: 1590206400,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 76,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 41,
        IconPhrase: "Partly cloudy w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us",
    },
    {
      Date: "2020-05-24T07:00:00+03:00",
      EpochDate: 1590292800,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 73,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us",
    },
    {
      Date: "2020-05-25T07:00:00+03:00",
      EpochDate: 1590379200,
      Temperature: {
        Minimum: {
          Value: 61,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 76,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us",
    },
    {
      Date: "2020-05-26T07:00:00+03:00",
      EpochDate: 1590465600,
      Temperature: {
        Minimum: {
          Value: 67,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us",
    },
  ],
};

export const cityByCoords = {
  Version: 1,
  Key: "213181",
  Type: "City",
  Rank: 31,
  LocalizedName: "Haifa",
  EnglishName: "Haifa",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "HA",
    LocalizedName: "Haifa",
    EnglishName: "Haifa",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IDT",
    Name: "Asia/Jerusalem",
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: "2020-10-24T23:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.812,
    Longitude: 34.999,
    Elevation: {
      Metric: {
        Value: 101,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 331,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "ForecastConfidence",
  ],
};
