import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getGithubLink, checkRepoAccessible, downloadRepo } from '../pages/github.page'

const JSZip = require("jszip");

let repoUrl;
let zipResponse;


When("I check for the GitHub repository link", () => {
    getGithubLink().should("exist").then(($link) => {
        repoUrl = $link.prop("href");
  });
});

Then("the repository link should be valid and publicly accessible", () => {
  checkRepoAccessible(repoUrl);
});

Given("I have the GitHub repository URL", () => {
  repoUrl =  getGithubLink();
});

When("I download the repository as a ZIP", () => {
    downloadRepo().then((response) => {
    zipResponse = response;
  });
});

Then("the download should be successful", () => {
    expect(zipResponse.status).to.eq(200);
    expect(zipResponse.body.length).to.be.greaterThan(1000);  
});

Given("I have the GitHub repository ZIP", () => {
  return downloadRepo().then((response) => {
    zipResponse = response;
  });
});

When("I extract the archive", () => {
  return JSZip.loadAsync(zipResponse.body, { base64: false }).then((zip) => {
    zipResponse.archive = zip;
  });
});

Then("it should contain a README.md file in the root", () => {
  const hasReadme = Object.keys(zipResponse.archive.files).some((file) =>
    file.match(/^.+\/README\.md$/i)
  );
  expect(hasReadme).to.be.true;
});