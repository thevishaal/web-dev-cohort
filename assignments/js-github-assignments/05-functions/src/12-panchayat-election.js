/**
 * 🗳️ Panchayat Election System - Capstone
 *
 * Village ki panchayat election ka system bana! Yeh CAPSTONE challenge hai
 * jisme saare function concepts ek saath use honge:
 * closures, callbacks, HOF, factory, recursion, pure functions.
 *
 * Functions:
 *
 *   1. createElection(candidates)
 *      - CLOSURE: private state (votes object, registered voters set)
 *      - candidates: array of { id, name, party }
 *      - Returns object with methods:
 *
 *      registerVoter(voter)
 *        - voter: { id, name, age }
 *        - Add to private registered set. Return true.
 *        - Agar already registered or voter invalid, return false.
 *        - Agar age < 18, return false.
 *
 *      castVote(voterId, candidateId, onSuccess, onError)
 *        - CALLBACKS: call onSuccess or onError based on result
 *        - Validate: voter registered? candidate exists? already voted?
 *        - If valid: record vote, call onSuccess({ voterId, candidateId })
 *        - If invalid: call onError("reason string")
 *        - Return the callback's return value
 *
 *      getResults(sortFn)
 *        - HOF: takes optional sort comparator function
 *        - Returns array of { id, name, party, votes: count }
 *        - If sortFn provided, sort results using it
 *        - Default (no sortFn): sort by votes descending
 *
 *      getWinner()
 *        - Returns candidate object with most votes
 *        - If tie, return first candidate among tied ones
 *        - If no votes cast, return null
 *
 *   2. createVoteValidator(rules)
 *      - FACTORY: returns a validation function
 *      - rules: { minAge: 18, requiredFields: ["id", "name", "age"] }
 *      - Returned function takes a voter object and returns { valid, reason }
 *
 *   3. countVotesInRegions(regionTree)
 *      - RECURSION: count total votes in nested region structure
 *      - regionTree: { name, votes: number, subRegions: [...] }
 *      - Sum votes from this region + all subRegions (recursively)
 *      - Agar regionTree null/invalid, return 0
 *
 *   4. tallyPure(currentTally, candidateId)
 *      - PURE FUNCTION: returns NEW tally object with incremented count
 *      - currentTally: { "cand1": 5, "cand2": 3, ... }
 *      - Return new object where candidateId count is incremented by 1
 *      - MUST NOT modify currentTally
 *      - If candidateId not in tally, add it with count 1
 *
 * @example
 *   const election = createElection([
 *     { id: "C1", name: "Sarpanch Ram", party: "Janata" },
 *     { id: "C2", name: "Pradhan Sita", party: "Lok" }
 *   ]);
 *   election.registerVoter({ id: "V1", name: "Mohan", age: 25 });
 *   election.castVote("V1", "C1", r => "voted!", e => "error: " + e);
 *   // => "voted!"
 */
export function createElection(candidates) {
  // Your code here
  const votes = {};
  const registeredVoters = new Set();
  const votedUsers = new Set();
  return {
    registerVoter(voter) {
      if (typeof voter !== "object" || voter === null || Array.isArray(voter))
        return false;
      const requiredFields = ["id", "name", "age"];
      for (const field of requiredFields) {
        if (!voter.hasOwnProperty(field)) return false;
      }
      const isRegister = registeredVoters.has(voter.id);
      if (isRegister) return false;
      if (voter.age < 18) return false;
      registeredVoters.add(voter.id);
      return true;
    },
    castVote(voterId, candidateId, onSuccess, onError) {
      const isRegister = registeredVoters.has(voterId);
      if (!isRegister) {
        return onError("Voter is not registered!");
      }
      const isCandidate = candidates.some(
        (candidate) => candidate.id === candidateId,
      );
      if (!isCandidate) {
        return onError("Candidate  not found!");
      }
      const isVoted = votedUsers.has(voterId);
      if (isVoted) {
        return onError("Already Voted!");
      }

      votedUsers.add(voterId);
      votes[candidateId] = (votes[candidateId] || 0) + 1;
      return onSuccess({ voterId, candidateId });
    },
    getResults(sortFn) {
      const results = candidates.map((candidate) => ({
        ...candidate,
        votes: votes[candidate.id] || 0,
      }));
      if (typeof sortFn === "function") {
        return results.sort(sortFn);
      }
      return results.sort((a, b) => b.votes - a.votes);
    },
    getWinner() {
      const results = this.getResults();
      if (results.length === 0 || results[0].votes === 0) return null;
      return results[0];
    },
  };
}

export function createVoteValidator(rules) {
  // Your code here
  return function (voter) {
    const { minAge, requiredFields } = rules;
    if (voter.age < minAge) {
      return {
        valid: false,
        reason: `Voter must be at least ${minAge} years old`,
      };
    }
    for (const element of requiredFields) {
      if (!voter.hasOwnProperty(element))
        return { valid: false, reason: `Missing required field: ${element}` };
    }
    return { valid: true, reason: "Valid voter" };
  };
}

export function countVotesInRegions(regionTree) {
  // Your code here
  if (!regionTree) return 0;
  const requiredFields = ["name", "votes", "subRegions"];
  for (const element of requiredFields) {
    if (!regionTree.hasOwnProperty(element)) return 0;
  }
  let totalVotes = regionTree.votes || 0;
  if (Array.isArray(regionTree.subRegions)) {
    for (const subRegion of regionTree.subRegions) {
      totalVotes += countVotesInRegions(subRegion);
    }
  }
  return totalVotes;
}

export function tallyPure(currentTally, candidateId) {
  // Your code here
  return {
    ...currentTally,
    [candidateId]: (currentTally[candidateId] || 0) + 1,
  };
}
