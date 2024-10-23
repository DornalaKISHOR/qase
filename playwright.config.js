const config = {
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [
    ["list"],
    [
      "playwright-qase-reporter",
      {
        mode: "testops",
        debug: false,
        testops: {
          api: {
            token:
              "295df6b7414a951137a514400b27a4cbe03e1034056f90be11bb3b5b7fc27b87",
          },
          project: "TEST", // Replace <DEMO> with your project code
          uploadAttachments: true,
          run: {
            complete: true,
          },
        },
      },
    ],
  ],
};

module.exports = config;
