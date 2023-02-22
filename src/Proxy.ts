import { ponder } from "../generated";

// ponder.on("Proxy:AdminChanged", async ({ event, context }) => {
//   console.log(event.params);
// });

// ponder.on("Proxy:Upgraded", async ({ event, context }) => {
//   console.log(event.params);
// });

ponder.on("Proxy:AttestationCreated", async ({ event, context }) => {
  await context.entities.Attestation.insert(event.log.logId, {
    creator: event.params.creator,
    about: event.params.about,
    key: event.params.key.toString(),
    val: event.params.val.toString(),
  });
});
