class Solution {
  public:
    vector<int> constructList(vector<vector<int>> &queries) {
        // code here
        int xori=0;
        vector<int>ans;
        int n=queries.size();
        for(int i=n-1;i>=0;i--){
            int a=queries[i][0];
            int b=queries[i][1];
            if(a==0){
                b^=xori;
                ans.push_back(b);
            }else{
                xori^=b;
            }
            
        }
        ans.push_back(xori);
        sort(ans.begin(),ans.end());
        return ans;
    }
};
