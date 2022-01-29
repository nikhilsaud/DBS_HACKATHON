# FILE LOADING PART! db_logs=[]
price_setup = int(input())
total_available_shares = int(input())
open_market = False


def helper(logs, price_setup, total_available_shares):

    if(not open_market):
        return logs

    temp_available_shares = total_available_shares
    for i in range(len(logs)):
        if logs['Price'] < price_setup:
            logs['Order_status'] = "REJECTED"
        else:
            if(logs['Executed_quantity'] < temp_available_shares):
                temp_available_shares -= logs['Executed_quantity']
            elif(temp_available_shares <= 0):
                return logs
            else:
                temp_available_shares -= logs['Executed_quantity']
    return logs


open_market = True
print(helper(db_logs, price_setup, total_available_shares, open_market))
