const sdk = require('node-appwrite');

module.exports = async function(context) {
  const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_FUNCTION_API_KEY);

  const databases = new sdk.Databases(client);

  try {
    // 1. Get total number of products to calculate a random offset
    const allProducts = await databases.listDocuments('db_id', 'collection_id', [
      sdk.Query.limit(1)
    ]);

    const total = allProducts.total;
    const randomOffset = Math.floor(Math.random() * Math.max(0, total - 10));

    // 2. Fetch the "trending" (random) products
    const trendingProducts = await databases.listDocuments('db_id', 'collection_id', [
      sdk.Query.limit(10),
      sdk.Query.offset(randomOffset)
    ]);

    // 3. Return only the documents to the frontend
    return context.res.json(trendingProducts.documents);

  } catch (err) {
    return context.res.json({ error: 'Could not fetch trending products' }, 500);
  }
};
