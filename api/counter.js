let count = 0; // 注意：这只是简单的内存存储，实际生产环境应使用数据库

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({ count });
    } else if (req.method === 'POST') {
        count++;
        res.status(200).json({ count });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};