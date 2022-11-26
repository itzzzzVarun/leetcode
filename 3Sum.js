/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
	let i=0
	let result=[]
    // sort numbers in ascending order to use two pointer approach
	nums.sort((a,b)=>a-b)

	while(i<nums.length-2){
			let start = i+1
			let end = nums.length-1
            // since we need total sum as 0 positive will not be solution
			if (nums[i] > 0) break
			while(start < end){
				if(nums[i]+nums[start]+nums[end] === 0){
					// if found valid triplet then push in result
					result.push([nums[i],nums[start],nums[end]])

					//after the using the element,we will move ahead of all of its duplicates
					while( nums[start] === nums[start+1]) start++
					while( nums[end] === nums[end-1]) end--
                    start++
                    end--
				}
				else if(nums[i]+nums[start]+nums[end]<0){
					 start+=1;
				 }
				else{
					end-=1;
				}
			}
		 //to avoid duplicacy 
		while(i<nums.length-3 && nums[i]===nums[i+1]) {          
				i+=1;
		}
		i+=1
		}
	return result
};