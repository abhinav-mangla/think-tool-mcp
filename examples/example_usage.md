# Example Usage of the Think Tool

This document demonstrates how to use the think tool effectively in various scenarios.

## Example 1: Complex Problem Solving

When Claude is working on a multi-step problem:
Human: Can you help me optimize our company's supply chain? We have 5 warehouses and 12 retail locations, and we need to minimize shipping costs while ensuring timely delivery.
Claude: I'll help you optimize your supply chain. Let me think through this problem systematically.
[Claude uses the think tool]
Thought: This is a complex optimization problem with multiple variables to consider:

Locations of 5 warehouses and 12 retail locations (need coordinates or distances)
Shipping costs between each warehouse-retail pair
Delivery time constraints for each retail location
Inventory capacity at each warehouse
Demand patterns at each retail location

I need to:

Gather the complete data set
Formulate this as a linear programming problem
Consider both cost minimization and time constraints
Possibly implement a modified transportation algorithm
Evaluate multiple solutions for robustness

[Claude responds with a structured approach based on the thinking]

## Example 2: Policy Adherence

When Claude needs to ensure compliance with complex policies:
Human: I want to return this product I bought 45 days ago, but I lost the receipt. The package is opened. Can I still get a refund?
Claude: Let me check our return policy carefully.
[Claude uses the think tool]
Thought: I need to analyze this return request against our store policy:

Item was purchased 45 days ago
Customer has no receipt
Package is opened

According to standard policy, returns require:

Returns within 30 days (this is outside that window at 45 days)
Original receipt (customer doesn't have this)
Unopened packaging for certain items (package is opened)

Exceptions to consider:

Store credit might be possible even without receipt if we can verify purchase in our system
Manager override for the 45-day window might be possible
Product category matters - electronics vs. clothing have different policies
Loyalty program members may have extended return windows

I need to explain these policy details and suggest possible options.
[Claude responds with a policy-compliant answer]

## Example 3: Tool Output Analysis

When Claude needs to process results from multiple tool calls:
Human: Search our customer database and find all premium users who haven't logged in for 60+ days, then draft an email campaign to re-engage them.
Claude: I'll help you identify inactive premium users and create a re-engagement campaign.
[Claude uses database search tool, gets results]
[Claude uses the think tool]
Thought: I've received the query results showing 342 premium users who haven't logged in for 60+ days. Let me analyze this data:
Patterns I'm noticing:

45% of inactive users are in the 6-12 month subscription cohort
Most common last activity was "viewed dashboard" (72%)
Very few (8%) used our newest features before becoming inactive
28% had support tickets in their last active month

For the email campaign, I should:

Segment these users into 2-3 groups based on their usage patterns
Focus on new features they haven't explored
Address possible pain points for users who had support tickets
Include personalized incentives based on their historical usage
Create a clear, compelling call-to-action

[Claude proceeds to design a targeted campaign based on this analysis] 